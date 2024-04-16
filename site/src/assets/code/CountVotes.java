import java.util.*;
import java.io.*;

public class CountVotes {
    public static void main(String[] args) throws FileNotFoundException {
        Scanner input = new Scanner(new File("src/votes.txt"));
        ArrayList<Ballot> ballots = readFile(input);
        int round = 1;
        boolean done = false;
        while (!done) {
            System.out.println("Round no." + round);
            Collections.sort(ballots);
            done = oneRound(ballots);
            System.out.println("-");
            round++;
        }
    }

    public static ArrayList<Ballot> readFile(Scanner input) {
        ArrayList<Ballot> result = new ArrayList<>();
        while (input.hasNextLine()) {
            String text = input.nextLine();
            if (!text.isBlank()) {
                result.add(new Ballot(text.split("\t")));
            }
        }
        return result;
    }

    public static boolean oneRound(ArrayList<Ballot> ballots) {
        String top = null;
        String bottom = null;
        int topCount = 0;
        int bottomCount = ballots.size() + 1;
        int i = 0;
        while (i < ballots.size()) {
            String next = ballots.get(i).getCandidate();
            int count = 0;
            do {
                i++;
                count++;
            } while (i < ballots.size() &&
                    ballots.get(i).getCandidate().equals(next));
            double percent = (double) (100 * count) / ballots.size();
            System.out.printf("%d votes for %s (%4.1f%%)\n", count, next, percent);
            if (count > topCount) {
                topCount = count;
                top = next;
            }
            if (count < bottomCount) {
                bottomCount = count;
                bottom = next;
            }
        }
        // There are three possible outcomes:
        // When you get down to just two candidates, there might be a tie where each of the remaining
        // candidates earns exactly 50% of the vote. In that case, there is no winner and you would want
        // to stop the algorithm from continuing.
        if (topCount == bottomCount) {
            System.out.println("Tie. There isn't a winner.");
            return true;
        }  // If the count for the top candidate is more than 50%, then that candidate has won.
        else if (topCount * 2 > ballots.size()) {
            System.out.println("Winner is " + top);
            return true;
        }   //normally would eliminate the candidate with the lowest vote total.
            else {
            System.out.println("No winner yet, eliminating " + bottom);
            eliminate(bottom, ballots);
            return false;
        }
    }

    public static void eliminate(String candidate, ArrayList<Ballot> ballots) {
        Iterator<Ballot> iterator = ballots.iterator();
        while (iterator.hasNext()) {
            Ballot b = iterator.next();
            b.eliminate(candidate);
            if (b.isEmpty()) {
                iterator.remove(); // removes empty ballots
            }
        }
    }
}