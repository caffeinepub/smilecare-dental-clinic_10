import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ContactMessage {
    created: Time;
    name: string;
    email: string;
    message: string;
}
export type Time = bigint;
export interface Appointment {
    service: string;
    created: Time;
    name: string;
    email: string;
    preferredDate: string;
    phone: string;
}
export interface Testimonial {
    review: string;
    date: Time;
    name: string;
    rating: bigint;
}
export interface backendInterface {
    addTestimonial(name: string, rating: bigint, review: string): Promise<string>;
    bookAppointment(name: string, phone: string, email: string, preferredDate: string, service: string): Promise<string>;
    getAllAppointments(): Promise<Array<Appointment>>;
    getAllContactMessages(): Promise<Array<ContactMessage>>;
    getAllTestimonials(): Promise<Array<Testimonial>>;
    submitContactForm(name: string, email: string, message: string): Promise<string>;
}
