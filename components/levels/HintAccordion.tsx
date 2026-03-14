import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface HintAccordionProps {
  hints: string[];
}

export function HintAccordion({ hints }: HintAccordionProps) {
  if (hints.length === 0) return null;

  return (
    <div className="rounded-sm border border-border bg-card p-5">
      <h3 className="mb-3 text-sm font-medium text-muted-foreground">
        Hints & Tips
      </h3>
      <Accordion>
        {hints.map((hint, index) => (
          <AccordionItem key={index}>
            <AccordionTrigger className="text-sm">
              Hint {index + 1}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground">
              {hint}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
