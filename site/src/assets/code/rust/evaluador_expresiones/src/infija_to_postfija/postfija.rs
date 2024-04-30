pub mod postfija_and_popall{
    use std::collections::HashMap;

    pub fn postfija(map: &HashMap<String, u32> ,pila: &mut Vec<String>, i: &char, mut operation_string: String) -> String{
        // Si la pila esta vacia, se le coloca el operador
        if pila.is_empty() {
            pila.push(i.to_string());
            return operation_string;
        }

        let key = &pila[pila.len()-1]; // Ultima key de la pila
        let valor: u32 = map.get(key).copied().unwrap_or(0); // Obtenemos el valor de la ultima key de la pila
        let value: u32 = map.get(&i.to_string()).copied().unwrap_or(0); // Obtenemos el valor de la llave leida actual

        // Caso con los paréntesis
        if i == &')' as &char {
            if &valor == &0 { // si es parentesis izquierdo se elimina de la pila
                pila.pop();
            }
            else { // si no es parentesis izquierdo se pasa lo de la pila a la expresion
                operation_string += &pila.pop().unwrap_or("0".to_string());
                return postfija(map, pila, i, operation_string);
            }
            return operation_string;
        }

        // se evaluan el valor actual del operador con el valor del ultimo operador de la pila
        if &value > &valor || &value == &0 {
            pila.push(i.to_string());
        }
        else if &value <= &valor {
            operation_string += &pila.pop().unwrap_or("0".to_string());
            return postfija(map, pila, i, operation_string);
        }

        operation_string
    }

    pub fn pop_everything(pila: &mut Vec<String>) -> String{
        let valor = pila.pop().unwrap_or("0".to_string());
        if !pila.is_empty() {
            return pop_everything(pila);
        }
        valor
    }
}