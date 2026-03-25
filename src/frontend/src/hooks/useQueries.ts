import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { Appointment, ContactMessage, Testimonial } from "../backend.d";
import { useActor } from "./useActor";

export function useGetTestimonials() {
  const { actor, isFetching } = useActor();
  return useQuery<Testimonial[]>({
    queryKey: ["testimonials"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllTestimonials();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useAddTestimonial() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      name,
      rating,
      review,
    }: {
      name: string;
      rating: bigint;
      review: string;
    }) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.addTestimonial(name, rating, review);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["testimonials"] });
    },
  });
}

export function useBookAppointment() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async ({
      name,
      phone,
      email,
      preferredDate,
      service,
    }: {
      name: string;
      phone: string;
      email: string;
      preferredDate: string;
      service: string;
    }) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.bookAppointment(name, phone, email, preferredDate, service);
    },
  });
}

export function useSubmitContactForm() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async ({
      name,
      email,
      message,
    }: {
      name: string;
      email: string;
      message: string;
    }) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.submitContactForm(name, email, message);
    },
  });
}

export type { Testimonial, Appointment, ContactMessage };
