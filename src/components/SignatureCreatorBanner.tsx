import { Link } from "react-router-dom";
import { PenTool, ArrowRight, Sparkles } from "lucide-react";

const SignatureCreatorBanner = () => {
    return (
        <Link
            to="/signature-creator"
            className="group mt-6 sm:mt-8 block rounded-xl border border-primary/20 bg-gradient-to-r from-primary/5 via-primary/10 to-accent/10 p-4 sm:p-5 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 hover:scale-[1.01]"
        >
            <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <PenTool className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                        <h3 className="text-sm sm:text-base font-semibold text-foreground">
                            Don't have a signature?
                        </h3>
                        <span className="hidden sm:inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-bold text-primary uppercase tracking-wider">
                            <Sparkles className="h-3 w-3" /> New
                        </span>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                        Create a professional digital signature by drawing or typing — then resize it right here.
                    </p>
                </div>
                <ArrowRight className="h-5 w-5 shrink-0 text-primary transition-transform group-hover:translate-x-1" />
            </div>
        </Link>
    );
};

export default SignatureCreatorBanner;
