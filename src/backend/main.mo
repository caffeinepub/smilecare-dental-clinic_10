import Text "mo:core/Text";
import Time "mo:core/Time";
import Array "mo:core/Array";
import Int "mo:core/Int";
import Iter "mo:core/Iter";
import Map "mo:core/Map";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";

actor {
  type Appointment = {
    name : Text;
    phone : Text;
    email : Text;
    preferredDate : Text;
    service : Text;
    created : Time.Time;
  };

  module Appointment {
    public func compare(appointment1 : Appointment, appointment2 : Appointment) : Order.Order {
      Int.compare(appointment1.created, appointment2.created);
    };
  };

  type Testimonial = {
    name : Text;
    rating : Nat;
    review : Text;
    date : Time.Time;
  };

  module Testimonial {
    public func compare(testimonial1 : Testimonial, testimonial2 : Testimonial) : Order.Order {
      Int.compare(testimonial1.date, testimonial2.date);
    };
  };

  type ContactMessage = {
    name : Text;
    email : Text;
    message : Text;
    created : Time.Time;
  };

  module ContactMessage {
    public func compare(message1 : ContactMessage, message2 : ContactMessage) : Order.Order {
      Int.compare(message1.created, message2.created);
    };
  };

  let appointments = Map.empty<Text, Appointment>();
  let testimonials = Map.empty<Text, Testimonial>();
  let contactMessages = Map.empty<Text, ContactMessage>();

  // Seed initial testimonials
  let initialTestimonials = [
    {
      name = "Alice";
      rating = 5;
      review = "Excellent service and friendly staff!";
      date = Time.now();
    },
    {
      name = "Bob";
      rating = 4;
      review = "Very professional and clean clinic.";
      date = Time.now();
    },
    {
      name = "Charlie";
      rating = 5;
      review = "Best dental experience I've had.";
      date = Time.now();
    },
    {
      name = "Diana";
      rating = 3;
      review = "Good service but a bit expensive.";
      date = Time.now();
    },
    {
      name = "Eve";
      rating = 5;
      review = "Highly recommend this clinic!";
      date = Time.now();
    },
  ];

  for (t in initialTestimonials.values()) {
    testimonials.add(t.name.concat(t.date.toText()), t);
  };

  // Appointment functions
  public shared ({ caller }) func bookAppointment(name : Text, phone : Text, email : Text, preferredDate : Text, service : Text) : async Text {
    let id = name.concat(Time.now().toText());
    let appointment : Appointment = {
      name;
      phone;
      email;
      preferredDate;
      service;
      created = Time.now();
    };
    appointments.add(id, appointment);
    "Appointment booked successfully!";
  };

  public query ({ caller }) func getAllAppointments() : async [Appointment] {
    appointments.values().toArray().sort();
  };

  // Testimonial functions
  public shared ({ caller }) func addTestimonial(name : Text, rating : Nat, review : Text) : async Text {
    if (rating < 1 or rating > 5) {
      Runtime.trap("Rating must be between 1 and 5");
    };
    let id = name.concat(Time.now().toText());
    let testimonial : Testimonial = {
      name;
      rating;
      review;
      date = Time.now();
    };
    testimonials.add(id, testimonial);
    "Testimonial added successfully!";
  };

  public query ({ caller }) func getAllTestimonials() : async [Testimonial] {
    testimonials.values().toArray().sort();
  };

  // Contact form functions
  public shared ({ caller }) func submitContactForm(name : Text, email : Text, message : Text) : async Text {
    let id = name.concat(Time.now().toText());
    let contactMessage : ContactMessage = {
      name;
      email;
      message;
      created = Time.now();
    };
    contactMessages.add(id, contactMessage);
    "Message sent successfully!";
  };

  public query ({ caller }) func getAllContactMessages() : async [ContactMessage] {
    contactMessages.values().toArray().sort();
  };
};
