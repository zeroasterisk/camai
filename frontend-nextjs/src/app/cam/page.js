import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Header from "../../components/header";

/**
 * 
 * Plans:
 * - list of cams known
 * - view single cams id
 * - start webcam stream --> view
 */
export default function CamPage() {
    return (
        <>
            <Header />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-6 bg-[#FDFBE6]">
                <div className="space-y-3">
                    <Card className="p-2 bg-[#FEEBC8] border-[#E6D5C1] border-solid border-2">
                        <CardHeader>
                            <CardTitle className="text-[#A2836E]">
                                Cam Page
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="grid gap-3 border-y py-3">
                            <p className="text-sm/relaxed text-[#A2836E]">
                                Create a new cam stream
                            </p>
                            <div className="space-y-1">
                                Steam from your Webcam
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div className="space-y-3">
                    <Card className="p-2 bg-[#FEEBC8] border-[#E6D5C1] border-solid border-2">
                        <CardHeader>
                            <CardTitle className="text-[#A2836E]">
                                Streams
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="grid gap-3 border-y py-3">
                            <p className="text-sm/relaxed text-[#A2836E]">
                                Connect to an existing cam stream
                            </p>
                            <div className="space-y-1">
                                <Label className="text-[#A2836E]" htmlFor="resolution">
                                    Webcam ID
                                </Label>
                                <Input
                                    className="bg-[#FDFBE6] text-[#A2836E] border-[#E6D5C1] border-solid border-2"
                                    defaultValue="enter an id"
                                    id="resolution"
                                />
                                <submit>
                                    Load
                                </submit>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    );
}
