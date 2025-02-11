"use client";

import React from "react";
import headerImg from "@/public/home/cta/cta-header.png";
import Image from "next/image";
import { motion } from "motion/react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from 'zod'

export default function CTA() {
  return (
    <div>
      <CTAHeader />
      <CTAForm />
    </div>
  );
}

function CTAHeader() {
  return (
    <div className="h-screen w-full relative">
      <Image
        alt="client testimonials"
        src={headerImg}
        priority
        fill
        sizes="100vw"
        className="object-cover"
      />
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="absolute top-0 z-10 left-0 p-4"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gray-400 w-24 md:w-32 text-lg md:text-xl font-bold text-black rounded-md text-center p-2 mt-5"
        >
          LOGO
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 flex flex-col items-center justify-center space-y-8 p-4 bg-black/30 bg-opacity-50 text-white"
      >
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center mb-4 text-xl md:text-2xl lg:text-4xl font-bold capitalize max-w-4xl mx-auto"
        >
          dolor sit amet consectetur. Quis adipiscing purus egestas aliquam
          viverra mi. dolor sit amet consectetur. Quis adipiscing
        </motion.h2>
      </motion.div>
    </div>
  );
}

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Invalid phone number"),
  timeframe: z.string(),
  size: z.string(),
  quantity: z.string(),
  description: z.string().min(10, "Description must be at least 10 characters"),
});

function CTAForm() {
  const form = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="uppercase font-bold text-xl md:text-3xl text-center py-10 md:py-20"
      >
        Request a Quote
      </motion.h2>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="py-10 grid max-w-5xl mx-auto grid-cols-1 md:grid-cols-2 gap-4 p-4"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: false }}
                >
                  <Input {...field} />
                </motion.div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: false }}
                >
                  <Input {...field} />
                </motion.div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: false }}
                >
                  <Input {...field} />
                </motion.div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="timeframe"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Time Frame *</FormLabel>
              <FormControl>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: false }}
                >
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select Time Frame" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-2 weeks">1-2 weeks</SelectItem>
                      <SelectItem value="1 month">1 month</SelectItem>
                      <SelectItem value="2-3 months">2-3 months</SelectItem>
                    </SelectContent>
                  </Select>
                </motion.div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="size"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Size *</FormLabel>
              <FormControl>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: false }}
                >
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Choose Size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="small">Small</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="large">Large</SelectItem>
                    </SelectContent>
                  </Select>
                </motion.div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="quantity"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Quantity *</FormLabel>
              <FormControl>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: false }}
                >
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Choose Quantity" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                    </SelectContent>
                  </Select>
                </motion.div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="col-span-1 md:col-span-2">
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Please Describe Your Project *</FormLabel>
                <FormControl>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: false }}
                  >
                    <Textarea
                      rows={10}
                      {...field}
                      placeholder="Describe your project..."
                    />
                  </motion.div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          className="flex items-center justify-center flex-col mx-auto col-span-1 md:col-span-2"
        >
          <div className="text-sm text-muted-foreground text-center mb-4">
            By submitting this form you agree to our{" "}
            <span className="underline underline-offset-4">
              Terms of service
            </span>{" "}
            and{" "}
            <span className="underline underline-offset-4">
              Privacy policy.
            </span>
          </div>
          <button
            type="submit"
            className="px-4 py-2 rounded-md text-white bg-hblue w-full md:w-44 flex items-center justify-center gap-2"
          >
            <span>Get started</span>
            <ArrowRight />
          </button>
        </motion.section>
      </form>
    </Form>
  );
}
