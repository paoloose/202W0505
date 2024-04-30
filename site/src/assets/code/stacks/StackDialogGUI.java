package stacks;

import javax.swing.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class StackDialogGUI {
    private PilaArray objPila;

    public StackDialogGUI(PilaArray pila) {
        objPila = pila;
    }

    public void createAndShowGUI() {
        // Crear la ventana principal
        JFrame frame = new JFrame("STACK");

        // Crear un panel para colocar los botones
        JPanel panel = new JPanel();

        // Crear los botones
        JButton insertButton = new JButton("Insertar dato");
        JButton deleteButton = new JButton("Eliminar dato");
        JButton showAllButton = new JButton("Mostrar todos los datos");
        JButton showTopButton = new JButton("Mostrar último dato");
        JButton clearButton = new JButton("Vaciar todo");
        JButton exitButton = new JButton("Salir del programa");

        // Agregar los botones al panel
        panel.add(insertButton);
        panel.add(deleteButton);
        panel.add(showAllButton);
        panel.add(showTopButton);
        panel.add(clearButton);
        panel.add(exitButton);

        // Agregar el panel a la ventana
        frame.add(panel);

        // Configurar la ventana
        frame.setSize(300, 200);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setVisible(true);

        // Añadir la lógica para los botones
        insertButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                String dato = JOptionPane.showInputDialog("Insertar dato:");
                objPila.insertarPila(dato);
            }
        });

        deleteButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                objPila.eliminarPila();
            }
        });

        showAllButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                objPila.mostrarPila();
            }
        });

        showTopButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                String primerDato = objPila.cimaPila();
                JOptionPane.showMessageDialog(null, "Último dato insertado en la pila: " + primerDato);
            }
        });

        clearButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                objPila.vaciarPila();
            }
        });

        exitButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                System.exit(0);
            }
        });
    }

    public static void main(String[] args) {
        PilaArray objPila = new PilaArray(5);
        StackDialogGUI stackDialogGUI = new StackDialogGUI(objPila);
        stackDialogGUI.createAndShowGUI();
    }
}