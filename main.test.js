
import { test, expect, describe } from "vitest";
import { addOrUpdatePlayer, validatePlayer } from "./main";


describe("Player Ranking Tests", () => {

    // Test 1: Valid player
    test("Valid player", () => {
        expect(validatePlayer("Ana", "100")).toBe(null);
    });

    // Test 2: Invalid score
    test("Invalid score", () => {
        expect(validatePlayer("Ana", "-5"))
            .toBe("Enter a valid score.");
    });

    // Test 3: Add new player
    test("Add player", () => {
        const players = [];

        addOrUpdatePlayer(players, {
            name: "Ana",
            score: 100
        });

        expect(players.length).toBe(1);
    });

    // Test 4: Update existing player
    test("Update player", () => {
        const players = [
            { name: "Ana", score: 100 }
        ];

        addOrUpdatePlayer(players, {
            name: "Ana",
            score: 200
        });

        expect(players[0].score).toBe(200);
        expect(players.length).toBe(1);
    });

    // Test 5: Sort players
    test("Sort ranking", () => {
        const players = [
            { name: "Ana", score: 100 },
            { name: "Carlos", score: 300 }
        ];

        const sorted = sortPlayers(players);

        expect(sorted[0].name).toBe("Carlos");
    })
})