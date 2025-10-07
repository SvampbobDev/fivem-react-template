import { Outlet } from "react-router";
import { Card, CardContent } from "@/components/ui/card";
import { APP_CONFIG } from "@/config";

export default function DefaultLayout() {
  return (
    <div className="min-h-screen h-screen w-screen flex items-center justify-center select-none bg-neutral-700 overflow-hidden">
      <Card className={`${APP_CONFIG.HEIGHT} ${APP_CONFIG.WIDTH}`}>
        <CardContent>
          <Outlet />
        </CardContent>
      </Card>
    </div>
  );
}
