import React from "react";

interface MarkdownRendererProps {
    content: string;
}

/**
 * Lightweight markdown renderer — handles headings, bold, italic,
 * unordered / ordered lists, and paragraphs.  No external dependency.
 */
export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
    const blocks = parseBlocks(content.trim());

    return (
        <div className="space-y-5 text-zinc-300 leading-relaxed text-[1.05rem]">
            {blocks.map((block, i) => (
                <React.Fragment key={i}>{renderBlock(block, i)}</React.Fragment>
            ))}
        </div>
    );
}

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

type Block =
    | { type: "heading"; level: number; text: string }
    | { type: "paragraph"; text: string }
    | { type: "ul"; items: string[] }
    | { type: "ol"; items: string[] };

/* ------------------------------------------------------------------ */
/*  Parser — splits raw markdown into typed blocks                     */
/* ------------------------------------------------------------------ */

function parseBlocks(md: string): Block[] {
    const lines = md.split("\n");
    const blocks: Block[] = [];
    let i = 0;

    while (i < lines.length) {
        const line = lines[i];

        // blank line → skip
        if (line.trim() === "") {
            i++;
            continue;
        }

        // heading
        const headingMatch = line.match(/^(#{1,4})\s+(.*)/);
        if (headingMatch) {
            blocks.push({
                type: "heading",
                level: headingMatch[1].length,
                text: headingMatch[2],
            });
            i++;
            continue;
        }

        // unordered list  (• or - or * at start of line)
        if (/^[\•\-\*]\s+/.test(line.trim())) {
            const items: string[] = [];
            while (i < lines.length && /^[\•\-\*]\s+/.test(lines[i].trim())) {
                items.push(lines[i].trim().replace(/^[\•\-\*]\s+/, ""));
                i++;
            }
            blocks.push({ type: "ul", items });
            continue;
        }

        // ordered list  (1. 2. etc.)
        if (/^\d+\.\s+/.test(line.trim())) {
            const items: string[] = [];
            while (i < lines.length && /^\d+\.\s+/.test(lines[i].trim())) {
                items.push(lines[i].trim().replace(/^\d+\.\s+/, ""));
                i++;
            }
            blocks.push({ type: "ol", items });
            continue;
        }

        // plain paragraph (collect consecutive non-special lines)
        {
            const parts: string[] = [];
            while (
                i < lines.length &&
                lines[i].trim() !== "" &&
                !lines[i].match(/^#{1,4}\s+/) &&
                !/^[\•\-\*]\s+/.test(lines[i].trim()) &&
                !/^\d+\.\s+/.test(lines[i].trim())
            ) {
                parts.push(lines[i]);
                i++;
            }
            blocks.push({ type: "paragraph", text: parts.join(" ") });
        }
    }

    return blocks;
}

/* ------------------------------------------------------------------ */
/*  Inline formatter — bold & italic                                   */
/* ------------------------------------------------------------------ */

function inlineFormat(text: string): React.ReactNode[] {
    // Split on **bold** and *italic* patterns
    const parts: React.ReactNode[] = [];
    const regex = /(\*\*(.+?)\*\*|\*(.+?)\*)/g;
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = regex.exec(text)) !== null) {
        // text before match
        if (match.index > lastIndex) {
            parts.push(text.slice(lastIndex, match.index));
        }

        if (match[2]) {
            // **bold**
            parts.push(
                <strong key={match.index} className="text-white font-semibold">
                    {match[2]}
                </strong>
            );
        } else if (match[3]) {
            // *italic*
            parts.push(
                <em key={match.index} className="italic text-zinc-200">
                    {match[3]}
                </em>
            );
        }

        lastIndex = match.index + match[0].length;
    }

    // remaining text
    if (lastIndex < text.length) {
        parts.push(text.slice(lastIndex));
    }

    return parts.length ? parts : [text];
}

/* ------------------------------------------------------------------ */
/*  Block renderer                                                     */
/* ------------------------------------------------------------------ */

function renderBlock(block: Block, key: number): React.ReactNode {
    switch (block.type) {
        case "heading": {
            const sizeMap: Record<number, string> = {
                1: "text-3xl md:text-4xl font-black mt-10 mb-4",
                2: "text-2xl md:text-3xl font-extrabold mt-8 mb-3",
                3: "text-xl md:text-2xl font-bold mt-6 mb-2",
                4: "text-lg md:text-xl font-bold mt-4 mb-2",
            };
            const cls = `${sizeMap[block.level] ?? sizeMap[2]} text-yellow-500 tracking-tight`;
            const children = inlineFormat(block.text);

            if (block.level === 1) return <h1 key={key} className={cls}>{children}</h1>;
            if (block.level === 3) return <h3 key={key} className={cls}>{children}</h3>;
            if (block.level === 4) return <h4 key={key} className={cls}>{children}</h4>;
            return <h2 key={key} className={cls}>{children}</h2>;
        }


        case "paragraph":
            return (
                <p key={key} className="text-zinc-300 leading-[1.8]">
                    {inlineFormat(block.text)}
                </p>
            );

        case "ul":
            return (
                <ul
                    key={key}
                    className="space-y-2 pl-1 list-none"
                >
                    {block.items.map((item, j) => (
                        <li key={j} className="flex gap-3 items-start">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-yellow-500" />
                            <span>{inlineFormat(item)}</span>
                        </li>
                    ))}
                </ul>
            );

        case "ol":
            return (
                <ol key={key} className="space-y-2 pl-1 list-none counter-reset-item">
                    {block.items.map((item, j) => (
                        <li key={j} className="flex gap-3 items-start">
                            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-yellow-500/20 text-yellow-500 text-xs font-bold">
                                {j + 1}
                            </span>
                            <span className="pt-0.5">{inlineFormat(item)}</span>
                        </li>
                    ))}
                </ol>
            );
    }
}
