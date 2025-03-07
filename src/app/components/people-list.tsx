import React from "react";
import { Person } from "../types/person";

interface PersonListProps {
  history: Person[];
}

export default function PeopleList({ history }: PersonListProps) {
  if (history.length === 0)
    return <p className="text-gray-500">No history available</p>;

  return (
    <div>
      <ul className="space-y-2">
        {history.map((person, index) => (
          <li
            key={index}
            className="flex items-center gap-2 p-2 border-b border-gray-300"
          >
            <img
              src={person.picture}
              alt={person.name}
              className="rounded-full w-12 h-12 object-cover"
            />
            <div>
              <strong className="text-lg">{person.name}</strong>
              <p className="text-gray-600">{person.email}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
