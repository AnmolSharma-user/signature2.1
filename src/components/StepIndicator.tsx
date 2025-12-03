import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface Step {
  number: number;
  label: string;
}

interface StepIndicatorProps {
  steps: Step[];
  currentStep: number;
}

const StepIndicator = ({ steps, currentStep }: StepIndicatorProps) => {
  return (
    <div className="w-full overflow-x-auto pb-2">
      <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-8 min-w-max px-2">
        {steps.map((step, index) => (
          <div key={step.number} className="flex items-center">
            <div className="flex flex-col items-center">
              <div
                className={cn(
                  "flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full border-2 text-xs sm:text-sm font-semibold transition-all duration-300",
                  currentStep > step.number
                    ? "border-primary bg-primary text-primary-foreground"
                    : currentStep === step.number
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-muted bg-muted text-muted-foreground"
                )}
              >
                {currentStep > step.number ? (
                  <Check className="h-4 w-4 sm:h-5 sm:w-5" />
                ) : (
                  step.number
                )}
              </div>
              <span
                className={cn(
                  "mt-1 sm:mt-2 text-[10px] sm:text-xs font-medium transition-colors whitespace-nowrap",
                  currentStep >= step.number ? "text-primary" : "text-muted-foreground"
                )}
              >
                {step.label}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={cn(
                  "mx-1 sm:mx-2 h-0.5 w-6 sm:w-8 md:w-16 transition-colors",
                  currentStep > step.number ? "bg-primary" : "bg-muted"
                )}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepIndicator;
