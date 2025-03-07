import React from "react";
import { Person } from "../types/person";

interface CurrentPersonProps {
  person: Person | null;
}

export default function CurrentPerson({ person }: CurrentPersonProps) {
  if (!person) return null;

  return (
    <div className="border border-gray-300 rounded-xl p-8 w-72 shadow flex flex-col items-center gap-4">
      <img
        src={person.picture}
        alt={person.name}
        className="rounded-full w-20 h-20 object-cover ring-2"
      />
      <h3 className="text-xl font-semibold mt-4">{person.name}</h3>
      <p className="text-gray-900">{person.email}</p>
      <p className="text-gray-600">{person.phone}</p>
      <p className="text-gray-600">
        {new Date(person.birthday).toLocaleDateString()}
      </p>
    </div>
  );
}
