use std::collections::HashMap;
use crate::infija_to_postfija::postfija::postfija_and_popall;
use crate::infija_to_postfija::evaluate::evaluating;
pub mod infija_to_postfija;

fn main() {
    let mut map: HashMap<String, u32> = HashMap::new();
    map.insert("+".to_string(), 1);
    map.insert("-".to_string(), 1);
    map.insert("*".to_string(), 2);
    map.insert("/".to_string(), 2);
    map.insert("^".to_string(), 3);
    map.insert("(".to_string(), 0);
    map.insert(")".to_string(), 0);

    let mut pila: Vec<String> = Vec::new();
    let mut datos: Vec<char> = Vec::new();

    let string: String = String::from("(9 + (8 * 7 - (6/5 ^ 4) * 3) * 2)");
    let mut string_nuevo: String = String::new();
    for i in remove_whitespace(&string).chars() {
        datos.push(i);
    }

    for i in &datos {
        match map.get(&i.to_string()) {
            Some(_value) => {
                string_nuevo += &postfija_and_popall::postfija(&map ,&mut pila, &i, String::from(""));
            },
            None => {
                string_nuevo += &i.to_string();
            },
        }
    }

    string_nuevo += &postfija_and_popall::pop_everything(&mut pila);

    for character in string_nuevo.chars(){
        match map.get(&character.to_string()) {
            Some(_value) => {
                evaluating::evaluate_post(&mut pila, &character);
            },
            None => {
                pila.push(character.to_string());
            },
        }
    }

    println!("{}", &string);
    println!("{}", string_nuevo);
    println!("{:?}", pila[0]);
}

fn remove_whitespace(s: &str) -> String {
    s.chars().filter(|c| !c.is_whitespace()).collect()
}