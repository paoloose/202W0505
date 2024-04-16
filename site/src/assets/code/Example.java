class Example {
    // A fibanocci example program
    public static void main(String[] args) {
        System.out.println("Hello, World!");
        System.out.println("Fibonacci(10): " + fibonacci(10));
    }

    public static int fibonacci(int n) {
        if (n <= 1) {
            return n;
        }
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
