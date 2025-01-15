import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

export default function Home() {
  return (
    <div className="p-3">
      <Card className="flex flex-col w-[350px] items-center justify-center border-black">
        <CardHeader>
          <CardTitle>User Name</CardTitle>
          <CardDescription>user@email.com</CardDescription>
        </CardHeader>
        <CardContent>
          <Avatar>
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </CardContent>
      </Card>
    </div>
  );
}
