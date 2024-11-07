"use client";

interface OutputLine {
  type: 'command' | 'response';
  content: string;
}

interface TerminalOutputProps {
  history: OutputLine[];
}

export function TerminalOutput({ history }: TerminalOutputProps) {
  return (
    <div className="space-y-2">
      {history.map((line, index) => (
        <div key={index} className="font-mono">
          {line.type === 'command' ? (
            <div className="flex items-center gap-2">
              <span className="text-primary">$</span>
              <span className="text-primary">{line.content}</span>
            </div>
          ) : (
            <pre className="whitespace-pre-wrap text-primary/90 ml-4">
              {line.content}
            </pre>
          )}
        </div>
      ))}
    </div>
  );
}