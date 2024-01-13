import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "../../components/header";

export default function AboutPage() {
  return (
    <>
      <Header />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-6 bg-[#FDFBE6]">
        <div className="space-y-3">
          <Card className="p-2 bg-[#FEEBC8] border-[#E6D5C1] border-solid border-2">
            <CardHeader>
              <CardTitle className="text-[#A2836E]">
                About Page
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3 border-y py-3">
              <p className="text-sm/relaxed text-[#A2836E]">
                TODO write some about copy.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}