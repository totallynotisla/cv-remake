"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "../ui/card";
import { useToast } from "@/hooks/use-toast";
// import { load as loadCaptcha } from "recaptcha-v3";

const formSchema = z.object({
    email: z.string().email(),
    subject: z.string().min(4, { message: "Subject must be at least 4 characters long" }),
    message: z.string().min(10, { message: "Subject must be at least 10 characters long" }),
});

export default function EmailForm() {
    const { toast } = useToast();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            subject: "",
            message: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            console.log(values);
            const res = await fetch("/api/send", { body: JSON.stringify(values), method: "POST" });
            const data = await res.json();

            if (data.status == "OK") {
                toast({ title: "Success", description: "Message sent successfully" });
                form.reset();
            } else {
                toast({ title: "Error", description: "Something went wrong" });
            }
        } catch (error) {
            console.error("Form submission error", error);
            toast({ title: "Error", description: "Failed to submit the form. Please try again." });
        }
    }

    return (
        <Form {...form}>
            <Card className="w-1/2 tablet:w-full mr-auto" data-aos="fade-up">
                <form onSubmit={form.handleSubmit(onSubmit)} className="p-6 flex flex-col gap-4">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="awesome@gmail.com" type="email" {...field} />
                                </FormControl>
                                <FormDescription>Your email</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Subject</FormLabel>
                                <FormControl>
                                    <Input placeholder="need help" type="" {...field} />
                                </FormControl>
                                <FormDescription>The subject you wanted to talk about</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Message</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="message" className="resize-none" rows={6} {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button type="submit" className="mr-auto px-6">
                        Submit
                    </Button>
                </form>
            </Card>
        </Form>
    );
}
