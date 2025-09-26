import { dashboard, login, register } from '@/routes';
import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { Facebook } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />
            </Head>
            <div className="flex min-h-screen flex-col items-center bg-[#FDFDFC] p-6 text-[#1b1b18] lg:justify-center lg:p-8 dark:bg-[#0a0a0a]">
                <header className="mb-6 w-full max-w-[335px] text-sm not-has-[nav]:hidden lg:max-w-4xl">
                    <nav className="flex items-center justify-end gap-4">
                        {auth.user ? (
                            <Link
                                href={dashboard()}
                                className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={login()}
                                    className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]"
                                >
                                    Log in
                                </Link>
                                <Link
                                    href={register()}
                                    className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </nav>
                </header>
                <div className="flex w-full items-center justify-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0">
                    <main className='flex flex-col items-center justify-center gap-2'>
                       <Card className='w-[350px] md:w-[500px] lg:w-[700px]'>
                            <CardHeader className='gap-2'>
                                <CardTitle className='text-xl'>About Us</CardTitle>
                                <CardDescription>
                                    The <strong>College of Computing Education</strong> maintains its reputation as one of the best computer schools in the region through its PACUCOA Level III accredited programs as well as being a certified Center of Development. The college is composed of highly qualified faculty members who are skilled and equipped with the updated skills in different fields of computer studies.
                                </CardDescription>
                                <CardContent>
                                    <img src="hero.jpg" alt="" />
                                </CardContent>
                            </CardHeader>
                        </Card>
                        <Card className='w-[350px] md:w-[500px] lg:w-[700px]'>
                            <CardHeader>
                                <CardTitle className='text-xl'>Programs Offered:</CardTitle>
                                <CardDescription>
                                    <ul>
                                        <li>Bachelor of Science in Information Technology</li>
                                        <li>Bachelor of Science in Computer Science</li>
                                        <li>Bachelor of Science in Information Systems</li>
                                        <li>Bachelor of Library and Information Science</li>
                                        <li>Bachelor of Science in Entertainment and Multimedia Computing – Digital Animation</li>
                                        <li>Bachelor of Science in Entertainment and Multimedia Computing – Game Development</li>
                                        <li>Bachelor of Multimedia Arts</li>
                                    </ul>
                                </CardDescription>
                            </CardHeader>
                        </Card>
                        <Card className='w-[350px] md:w-[500px] lg:w-[700px]'>
                            <CardHeader>
                                <CardTitle className='text-xl'>Why Choose CCE?</CardTitle>
                                <CardDescription>
                                    The UM College of Computing Education (CCE) stands at the forefront of technological innovation, offering students a cutting-edge curriculum that bridges the gap between theory and real-world application. With over 95% of graduates securing employment within six months of graduation, CCE is known for its rigorous academic programs, top-tier faculty, and strong industry partnerships with leading tech companies like Google, Microsoft, and IBM. Students benefit from hands-on experience through internships, research projects, and collaborative initiatives that provide them with the skills needed to excel in the rapidly evolving tech landscape. Choose CCE, where opportunities are limitless, and the future of technology begins.
                                </CardDescription>
                            </CardHeader>
                        </Card>
                        <Card className='w-[350px] md:w-[500px] lg:w-[700px]'>
                            <CardHeader>
                                <CardTitle className='text-xl'>CCE Socials</CardTitle>
                                <CardDescription className='hover:underline'>
                                    <Link href={"https://www.facebook.com/umccecsg"}>
                                        <div className='flex items-center gap-2'>
                                            <Facebook /> UM CCE CSG
                                        </div>
                                    </Link>
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </main>
                </div>
                <div className="hidden h-14.5 lg:block"></div>
            </div>
        </>
    );
}
