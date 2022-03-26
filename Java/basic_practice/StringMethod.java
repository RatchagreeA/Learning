public class StringMethod {
    public static void main(String[] args) {
        String name = "Bob";
        String city = new String("Bangkok");
        String friend1 = "John";
        String friend2 = "Bob";

        // concatenation
        // String result = name + city;
        // System.out.println(result.concat(".com"));

        // // find length of string
        // System.out.println(result.length());

        // // find charactor
        // System.out.println(result.charAt(4));

        // // compare string
        // System.out.println(name.equals(friend1));
        // System.out.println(name.equals(friend2));
        // System.out.println(name.equalsIgnoreCase(friend2));

        // find word
        String fullName = "Mr.Bob Pop";
        String code = "123456789TH";
        System.out.println(fullName.startsWith("Mr."));
        System.out.println(code.endsWith("TH"));
        System.out.println(fullName.indexOf("o"));
    }
    
}
