"use client";

import { ArrowRight, LightbulbIcon, Music, VideoIcon } from "lucide-react";

import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation";

const tools = [
    {
        label: "Generate Ideas",
        icon: LightbulbIcon,
        color: "text-violet-500",
        bgColor: "bg-violet-500/10",
        href: "/idea",
    },
    {
        label: "Generate Video",
        icon: VideoIcon,
        color: "text-orange-500",
        bgColor: "bg-orange-500/10",
        href: "/video",
    },
    {
        label: "Generate Music",
        icon: Music,
        color: "text-emerald-500",
        bgColor: "bg-emerald-500/10",
        href: "/music",
    },
]

const DashboardPage = () => {
    const router = useRouter();
    return (
        <div className="mb-8 space-y-4">
            <h2 className="text-2xl md:text-4xl font-bold text-center">
                TokGen
            </h2>
            <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
                Where imagination meets AI.
            </p>
            <div className="px-4 md:px-20 lg:px-32 space-y-4">
                {tools.map((tool) =>
                    <Card
                    onClick={() => router.push(tool.href)}
                    key = {tool.href}
                    className =  "p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
                    >
                        <div className="flex items-center gap-x-4">
                            <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                                <tool.icon className={cn("w-8 h-8", tool.color)} />
                            </div>
                            <div className="font-semibold">{tool.label}</div>
                        </div>
                        <ArrowRight className="w-5 h-5" />
                    </Card>
                )}
            </div>
        </div>
    );
}

export default DashboardPage;
