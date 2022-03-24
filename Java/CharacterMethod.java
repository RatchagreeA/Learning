public class CharacterMethod {
    public static void main(String[] args) {
        char a = 'A';
        char b = 'b';
        char[] group = {'A', 'B', 'C', 'D'};
        Character alphabet = 'A';
        System.out.println(a);
        System.out.println(group[1]);
        System.out.println(Character.isLetter(alphabet));
        System.out.println(Character.isDigit(alphabet));
        System.out.println(Character.isUpperCase(alphabet));
        System.out.println(Character.isLowerCase(alphabet));

        System.out.println("Before : " + a);
        System.out.println("After : " + Character.toLowerCase(a));

        System.out.println("Before : " + b);
        System.out.println("After : " + Character.toUpperCase(b));
    }
    
}
