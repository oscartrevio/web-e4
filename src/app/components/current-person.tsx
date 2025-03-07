import React from "react";
import { Person } from "../types/person";

interface CurrentPersonProps {
  person: Person | null;
}

export default function CurrentPerson({ person }: CurrentPersonProps) {
  if (!person) return null;

  return (
    <div className="border border-gray-300 rounded-lg p-4 w-72 shadow-md">
      <img
        src={person.picture}
        alt={person.name}
        className="rounded-full w-20 h-20 object-cover"
      />
      <h3 className="text-xl font-semibold mt-4">{person.name}</h3>
      <p className="text-gray-700">Email: {person.email}</p>
      <p className="text-gray-700">Phone: {person.phone}</p>
      <p className="text-gray-700">
        Birthday: {new Date(person.birthday).toLocaleDateString()}
      </p>
    </div>
  );
}
