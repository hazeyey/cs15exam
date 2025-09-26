import AppLogoIcon from '@/components/app-logo-icon';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { home } from '@/routes';
import { Link } from '@inertiajs/react';
import { type PropsWithChildren } from 'react';

export default function AuthCardLayout({
    children,
    title,
    description,
}: PropsWithChildren<{
    name?: string;
    title?: string;
    description?: string;
}>) {
    return (
        <div
            className="flex min-h-svh flex-col items-center justify-center bg-cover bg-center p-6 md:p-10"
            style={{
                backgroundImage: "url('/hero.png')", 
            }}
        >
            <div className="flex w-full max-w-md flex-col gap-6">
                <Card className="rounded-xl shadow-lg bg-white/90 backdrop-blur-sm">
                    <CardHeader className="px-10 pt-8 pb-0 text-center space-y-4">
                       
                       <Link href={home()} className="flex justify-center"> 
                        <img
                            src="/ccelogo.png"  
                            alt="CCE Logo"
                            className="h-20 w-auto mx-auto cursor-pointer hover:scale-105 transition-transform"
                        />
                        </Link>
                        <CardTitle className="text-xl font-semibold">
                            {title}
                        </CardTitle>
                        <CardDescription className="text-gray-600">
                            {description}
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="px-10 py-8">
                        {children}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}