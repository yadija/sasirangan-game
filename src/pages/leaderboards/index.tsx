import { useState } from "react";
import { Link, useNavigate } from "react-router";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Leaderboard {
  name: string;
  score: number;
  finishTime: string;
}

export default function Leaderboards() {
  const navigate = useNavigate();

  const [leaderboards] = useState<Leaderboard[]>(
    JSON.parse(localStorage.getItem("leaderboards") || "[]"),
  );

  const handleReset = () => {
    localStorage.setItem("leaderboards", "[]");
    navigate(0);
  };

  return (
    <section className="flex size-full flex-col items-center justify-center">
      <h1 className="mb-5 text-center text-2xl font-bold sm:text-3xl md:text-5xl lg:text-7xl">
        Peringkat
      </h1>

      <Card className="w-full max-w-xl border-black bg-transparent p-5">
        <section className="space-x-4">
          <Button variant="outline">
            <Link to="/">Kembali</Link>
          </Button>
          <Button variant="destructive" onClick={handleReset}>
            Reset
          </Button>
        </section>

        <Table className="m-auto mt-5">
          <TableCaption>List peringkat.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Nama</TableHead>
              <TableHead className="w-40 text-center">Score</TableHead>
              <TableHead className="text-right">Waktu Selesai</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leaderboards.length === 0 && (
              <TableRow>
                <TableCell colSpan={3} className="text-center">
                  Kosong
                </TableCell>
              </TableRow>
            )}
            {leaderboards &&
              leaderboards.map((leaderboard, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">
                    {leaderboard.name}
                  </TableCell>
                  <TableCell className="text-center">
                    {leaderboard.score}
                  </TableCell>
                  <TableCell className="text-right">
                    {leaderboard.finishTime}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </Card>
    </section>
  );
}
