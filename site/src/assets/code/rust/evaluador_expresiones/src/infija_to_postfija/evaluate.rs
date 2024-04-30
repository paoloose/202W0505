pub mod evaluating{
    pub fn evaluate_post(pila: &mut Vec<String>, character: &char){
        let valor_de = pila.pop().unwrap_or("0".to_string());
        let valor_iz = pila.pop().unwrap_or("0".to_string());

        let a: u32 = valor_de.parse().unwrap();
        let b: u32 = valor_iz.parse().unwrap();

        if character == &'+' {
            pila.push((b+a).to_string());
        }
        else if character == &'-' {
            pila.push((b-a).to_string());
        }
        else if character == &'*' {
            pila.push((b*a).to_string());
        }
        else if character == &'/' {
            pila.push((b/a).to_string());
        }
        else if character == &'^' {
            pila.push((b.pow(a)).to_string());
        }
    }
}