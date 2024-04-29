package stacks;

import javax.swing.*;

public class PilaArray {
    private String[] pila;
    private int top;
    private final int MAX;

    public PilaArray(int MAX) {
        this.MAX = MAX;
        pila = new String[MAX];
        top = -1;
    }

    public boolean isPilaLlena() {
        return top == MAX - 1;
    }

    public boolean isPilaVacia() {
        return top == -1;
    }

    public void insertarPila(String dato) {
        if (isPilaLlena()) {
            JOptionPane.showMessageDialog(null, "La pila está llena.");
        } else {
            if (dato != null && !dato.isEmpty()) {
                top++;
                pila[top] = dato;
                JOptionPane.showMessageDialog(null, "Dato insertado correctamente.");
            } else {
                JOptionPane.showMessageDialog(null, "Ingrese un dato válido.");
            }
        }
    }

    public void eliminarPila() {
        if (isPilaVacia()) {
            JOptionPane.showMessageDialog(null, "La pila está vacía.");
        } else {
            String datoEliminado = pila[top];
            top--;
            JOptionPane.showMessageDialog(null, "Dato eliminado: " + datoEliminado);
        }
    }

    public void mostrarPila() {
        if (isPilaVacia()) {
            JOptionPane.showMessageDialog(null, "La pila está vacía.");
        } else {
            StringBuilder mensaje = new StringBuilder("Elementos en la pila:\n");
            for (int i = top; i >= 0; i--) {
                mensaje.append(pila[i]).append("\n");
            }
            JOptionPane.showMessageDialog(null, mensaje.toString());
        }
    }

    public void vaciarPila() {
        top = -1;
        JOptionPane.showMessageDialog(null, "Pila vaciada correctamente.");
    }

    public String cimaPila() {
        if (isPilaVacia()) {
            return "La pila está vacía.";
        } else {
            return pila[top];
        }
    }
}
