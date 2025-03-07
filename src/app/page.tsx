"use client";

import React from "react";
import { usePeopleApi } from "./hooks/usePeopleApi";
import CurrentPerson from "./components/current-person";
import PeopleList from "./components/people-list";

export default function Home() {
  const { currentPerson, personHistory, error, loading, fetchData } =
    usePeopleApi();

  if (error) return <div className="text-red-500">Error loading data</div>;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <button
        onClick={fetchData}
        className="absolute top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600"
      >
        Fetch Data
      </button>

      {loading && (
        <div className="flex justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl text-gray-500">
          Loading...
        </div>
      )}

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h1 className="text-2xl font-semibold mb-4">Current Person</h1>
          <CurrentPerson person={currentPerson} />
        </div>

        <div>
          <h1 className="text-2xl font-semibold mb-4">People History</h1>
          <PeopleList history={personHistory} />
        </div>
      </div>
    </div>
  );
}
