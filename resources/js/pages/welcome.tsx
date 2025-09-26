import { login, register, logout } from '@/routes';
import { type SharedData } from '@/types';
import { Head, Link, usePage, router } from '@inertiajs/react';
import { useMobileNavigation } from '@/hooks/use-mobile-navigation';
import { Facebook, LogOut } from 'lucide-react';
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
    const cleanup = useMobileNavigation();
    const handleLogout = () => {
            cleanup();
            router.flushAll();
    };

    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />
            </Head>

            <div className="relative min-h-screen w-full bg-cover bg-center" style={{ backgroundImage: "url('/hero.png')" }}>

                <div className="absolute inset-0 bg-black/40"></div>

                {/* HEADER */}
                    <header className="fixed top-0 left-0 z-50 flex w-full items-center justify-between px-8 py-4 text-white bg-black/30 backdrop-blur-md">

                    <div className="flex items-center gap-6">
                        <img src="/ccelogo.png" alt="CCE Logo" className="h-10 w-auto" />
                        <nav className="hidden md:flex gap-6 text-sm font-medium">
                            <a href="#home" className="hover:text-gray-300">Home</a>
                            <a href="#about" className="hover:text-gray-300">About Us</a>
                            <a href="#programs" className="hover:text-gray-300">Programs</a>
                        </nav>
                    </div>

                    <nav className="flex gap-4">
                        {auth.user ? (
                            <Link
                                href={logout()}
                                as="button"
                                onClick={handleLogout}
                                data-test="logout-button"
                                className="flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm text-black hover:bg-gray-200"
                            >
                                <LogOut size={16} className="mr-2" />
                                Log out
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={login()}
                                    className="rounded-md bg-white/10 px-4 py-2 text-sm hover:bg-white/20"
                                >
                                    Log in
                                </Link>
                                <Link
                                    href={register()}
                                    className="rounded-md bg-yellow-400 px-4 py-2 text-sm text-black hover:bg-yellow-500"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </nav>
                </header>

                {/* HERO SECTION */}
                <section
                    id="home"
                    className="relative z-10 flex h-screen flex-col items-center justify-center text-center text-white px-6"
                    >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

                    <div className="relative z-10 max-w-3xl px-6">
                        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
                        Welcome to the College of Computing Education
                        </h1>
                        <p className="mt-4 text-lg md:text-2xl font-light text-gray-200 drop-shadow-md">
                        "Shaping future innovators in technology and computing."
                        </p>
                    </div>
                </section>

            </div>

            <div className='flex flex-col w-2/3 mx-auto'>
                <section
                    id="about"
                    className="h-screen flex items-center justify-between"
                    >

                    <div className="w-full md:w-1/2 pr-6">
                        <h2 className="text-4xl font-bold mb-6 border-b-4 border-yellow-400 inline-block">About Us</h2>
                        <p className="text-lg leading-relaxed">
                        The <strong>College of Computing Education</strong> maintains its reputation as
                        one of the best computer schools in the region through its PACUCOA Level III
                        accredited programs as well as being a certified Center of Development.
                        Our faculty are highly qualified and skilled in the latest fields of computer
                        studies.
                        </p>
                    </div>

                    <div className="hidden md:flex w-full md:w-1/2 justify-center">
                        <img src="/ccelogo.png" alt="CCE Logo" className="w-[500px] md:w-[500px] object-contain" />
                    </div>
                </section>

                {/* PROGRAMS SECTION */}
                <section
                    id="programs"
                    className="h-screen flex flex-col justify-center gap-2"
                    >
                    <div className="">
                        <h2 className="text-4xl font-bold inline-block relative pb-2">
                        Programs Offered
                        <span className="absolute left-0 bottom-0 w-full h-1 bg-yellow-400"></span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Card className='hover:shadow-lg transition text-xl'>
                            <CardHeader>
                                <CardTitle>Bachelor of Science in Information Technology</CardTitle>
                                <CardDescription>Focuses on software development, database management, and IT infrastructure to prepare students for careers in the tech industry.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                image 
                            </CardContent>
                        </Card>

                        <Card className='hover:shadow-lg transition text-xl'>
                            <CardHeader>
                                <CardTitle>Bachelor of Science in Computer Science</CardTitle>
                                <CardDescription>Provides strong foundations in algorithms, programming, and artificial intelligence for future innovators and researchers.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                image 
                            </CardContent>
                        </Card>

                        <Card className='hover:shadow-lg transition text-xl'>
                            <CardHeader>
                                <CardTitle>Bachelor of Science in Information Systems</CardTitle>
                                <CardDescription>Combines business and technology, training students to design and manage efficient information systems for organizations.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                image 
                            </CardContent>
                        </Card>

                        <Card className='hover:shadow-lg transition text-xl'>
                            <CardHeader>
                                <CardTitle>Bachelor of Library and Information Science</CardTitle>
                                <CardDescription>Equips students with the skills to manage, organize, and digitize knowledge resources for modern libraries and institutions.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                image 
                            </CardContent>
                        </Card>

                        <Card className='hover:shadow-lg transition text-xl'>
                            <CardHeader>
                                <CardTitle>Bachelor of Science in Entertainment and Multimedia Computing – Digital Animation</CardTitle>
                                <CardDescription>Specializes in 2D/3D animation, preparing students for careers in film, gaming, and multimedia design industries.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                image 
                            </CardContent>
                        </Card>

                        <Card className='hover:shadow-lg transition text-xl'>
                            <CardHeader>
                                <CardTitle>Bachelor of Science in Entertainment and Multimedia Computing – Game Development</CardTitle>
                                <CardDescription>Focuses on designing and developing interactive games with strong foundations in programming and creative design.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                image 
                            </CardContent>
                        </Card>

                        <Card className='hover:shadow-lg transition text-xl'>
                            <CardHeader>
                                <CardTitle>Bachelor of Multimedia Arts</CardTitle>
                                <CardDescription>Covers graphic design, film, and digital media to develop versatile creatives for the modern multimedia industry.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                image 
                            </CardContent>
                        </Card>
                    </div>
                </section>
            </div>

            {/* FOOTER */}
            <footer className="bg-yellow-400 text-black py-6 px-6 md:px-20">
                <div className="flex items-center justify-between">
                    <p>© 2025 UM College of Computing Education</p>
                    <Link href="https://www.facebook.com/umccecsg" className="flex items-center gap-2 hover:underline">
                        <Facebook /> UM CCE CSG
                    </Link>
                </div>
            </footer>
        </>
    );
}
