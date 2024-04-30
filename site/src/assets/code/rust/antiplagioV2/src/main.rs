use std::collections::HashSet;
use std::fs;

fn get_palabras(content: &String) -> Vec<String> {
    let mut unique_words = HashSet::new();
    let mut palabras: Vec<String> = content
        .split(|c: char| c.is_whitespace() || c == ',' || c == '.' || c == '¿' || c == '?' || c == '(' || c == ')' || c == '[' || c == ']' || c == '-' || c == '!' || c == '¡')
        .filter(|&word| !word.is_empty())
        .map(|word| {
            let lowercase_word = word.to_lowercase();
            if unique_words.insert(lowercase_word.clone()) {
                lowercase_word
            } else {
                String::new()
            }
        })
        .filter(|word| !word.is_empty())
        .collect();
    palabras.sort();
    palabras
}

fn similarity_percentage(vec1: &Vec<String>, vec2: &Vec<String>) -> f64 {
    let mut cont :f64 = 0.0;
    for word in vec1 {
        for element in vec2 {
            if word == element {
                cont += 1.0;
                break;
            }
        }
    }
    let percentage = (cont/vec1.len() as f64)*100.0;
    percentage
}

fn main() {
    let file_path1 = r"src\text1.txt";
    let file_path2 = r"src\text2.txt";

    let contents1 = fs::read_to_string(file_path1)
        .expect("Should have been able to read the file");

    let contents2 = fs::read_to_string(file_path2)
        .expect("Should have been able to read the file");

    let words_1 = get_palabras(&contents1);
    let words_2 = get_palabras(&contents2);

    println!("La similitud del texto 1 al texto 2 es de: {:.2}%", similarity_percentage(&words_1, &words_2));
    println!("La similitud del texto 2 al texto 1 es de: {:.2}%", similarity_percentage(&words_2, &words_1));
}