import { ShipWheel } from "lucide-react";

export const Loader = () => {
    return (
        <div className="h-full flex flex-col gap-y-4 items-center justify-center">
            <div className="animate-spin">
                <ShipWheel />
            </div>
            <p>Spinning brilliant ideas for you ...</p>
        </div>
    )
}