'use client'

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"

export default function ContactSection() {
    const form = useForm({
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    })

    const onSubmit = (values) => {
        console.log(values)
        // You can integrate EmailJS, Nodemailer, or API route here.
    }

    return (
        <section className=" relative z-10 text-white pb-10 md:pb-0 md:mb-10 md:py-24 px-3 md:px-12">
            <div className=" flex flex-col md:flex-row items-center justify-between gap-10">
                {/* Left Side - Heading */}
                <div className="flex-1 flex flex-col mb-10 md:mb-0 relative md:bottom-12 items-center text-center md:text-left">

                    <h2 className="text-white text-[10rem] md:text-[180px] font-extrabold leading-tight ">Let's</h2>
                    <h2 className="text-emerald-500 text-[9rem] absolute top-24 md:top-28 md:text-[180px] font-extrabold leading-tight">Talk!</h2>

                </div>

                {/* Right Side - Contact Form */}
                <div className="flex-1 w-full">
                    <Card className="bg-slate-500/10 border md:w-[45vw] border-white/10 backdrop-blur-md shadow-xl rounded-4xl">

                        <CardContent>
                            <Form {...form}>
                                <form
                                    onSubmit={form.handleSubmit(onSubmit)}
                                    className="space-y-5"
                                >
                                    {/* Name Field */}
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-gray-300 text-lg font-bold">Name</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="Jane Smith"
                                                        className="bg-[#1b1b1b]  h-14 text-xl! font-medium! placeholder:text-lg border-white/10 rounded-3xl focus:shadow-md focus:shadow-emerald-500 text-white placeholder-gray-400"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    {/* Email Field */}
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-gray-300 text-lg font-bold">Email</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="jane@agency.com"
                                                        type="email"
                                                        className="bg-[#1b1b1b]  h-14 text-xl! font-medium! placeholder:text-lg border-white/10 rounded-3xl focus:shadow-md focus:shadow-emerald-500 text-white placeholder-gray-400"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    {/* Message Field */}
                                    <FormField
                                        control={form.control}
                                        name="message"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-gray-300 text-lg font-bold">Message</FormLabel>
                                                <FormControl>
                                                    <Textarea
                                                        rows={8}
                                                        placeholder="Write your message..."
                                                        className="bg-[#1b1b1b]  h-28 text-xl! font-medium! placeholder:text-lg border-white/10 rounded-3xl focus:shadow-md focus:shadow-emerald-500 text-white placeholder-gray-400"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    {/* Submit Button */}
                                    <Button
                                        type="submit"
                                        className="w-full bg-emerald-500 hover:bg-emerald-600 cursor-pointer text-black font-semibold text-lg py-6 rounded-xl transition-all"
                                    >
                                        Submit
                                    </Button>
                                </form>
                            </Form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
