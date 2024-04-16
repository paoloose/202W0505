import java.util.*;
import java.io.*;

public class AntiplagioV2 {
  public static void main(String[] args) throws FileNotFoundException {
    Scanner console = new Scanner(System.in);
    darIntro();

    System.out.print("Archivo #1 nombre? ");
    Scanner in1 = new Scanner(new File(console.nextLine()));

    System.out.print("Archivo #2 nombre? ");
    Scanner in2 = new Scanner(new File(console.nextLine()));
    System.out.println();

    Set<String> lista1 = getPalabras(in1);
    Set<String> lista2 = getPalabras(in2);
    Set<String> comun = getCoincidencias(lista1, lista2);

    reportarResultados(lista1, lista2, comun);
  }

  public static Set<String> getPalabras(Scanner input) {
    input.useDelimiter("[^a-zA-Z']+");

    Set<String> palabras = new HashSet<String>();

    while (input.hasNext()) {
      String next = input.next().toLowerCase();
      palabras.add(next);
    }
    return palabras;
  }

  public static Set<String> getCoincidencias(Set<String> lista1, Set<String> lista2) {
    Set<String> intersection = new HashSet<String>(lista1);
    intersection.retainAll(lista2);
    return intersection;
  }

  public static void darIntro() {
    System.out.println("Este programa compara dos archivos de texto");
    System.out.println("e informa el número de palabras en");
    System.out.println("común y el porcentaje de coincidencias");
    System.out.println();
  }

  public static void reportarResultados(Set<String> lista1, Set<String> lista2, Set<String> comun) {
    System.out.println("Archivo #1 palabras = " + lista1.size());
    System.out.println("Archivo #2 palabras = " + lista2.size());
    System.out.println("Palabras en común = " + comun.size());
    double pct1 = 100.0 * comun.size() / lista1.size();
    double pct2 = 100.0 * comun.size() / lista2.size();
    System.out.println("% del archivo 1 en superposición  = " + pct1);
    System.out.println("% del archivo 2 en superposición  = " + pct2);
  }
}
