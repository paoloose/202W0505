
import java.util.*;

public class Ballot implements Comparable<Ballot> {
    private ArrayList<String> preferences;

    public Ballot(String[] names) {
        preferences = new ArrayList<>();
        for (String next : names) {
            preferences.add(next);
        }
    }

    public String getCandidate() {
        if (preferences.size() > 0) {
            return preferences.get(0);
        } else {
            return null;
        }
    }

    public void eliminate(String name) {
        preferences.remove(name);
    }

    public boolean isEmpty() {
        return preferences.isEmpty();
    }

    public int compareTo(Ballot other) {
        return getCandidate().compareTo(other.getCandidate());
    }
}
