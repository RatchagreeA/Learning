public class StringMethod2 {
    public static void main(String[] args) {
        String msg = "Happy New Year 2020 | Happy birth day 2020";
        
        // System.out.println("Before : " + msg);
        // msg = msg.replace("2020", "2022");
        // System.out.println("After : " + msg);

        // System.out.println("Before : " + msg);
        // msg = msg.replaceFirst("2020", "2022");
        // System.out.println("After : " + msg);

        // String data = "Dog,Cat,Brid";
        // String[] pet = data.split(",");
        // System.out.println(pet[1]);

        // String txt = "HelloWorld!";
        // System.out.println(txt.substring(0,5));

        // // String to character 
        // char[] alphabet = txt.toCharArray();
        // System.out.println(alphabet[5]);
        // // Charater to string
        // char[] name = {'B','o','b'};
        // String result = String.copyValueOf(name);
        // System.out.println(result);

        // String home = "     Bangkok       ";
        // System.out.println(home.length());
        // System.out.println(home);
        // home= home.trim();
        // System.out.println(home.length());
        // System.out.println(home);

        // switch upper/lower case
        String txtUp = "HELLOWORLD!";
        System.out.println(txtUp.toLowerCase());

        // convert num to string
        double num = 3.1425;
        String result = String.valueOf(num);
        System.out.println(result);
    }
}
