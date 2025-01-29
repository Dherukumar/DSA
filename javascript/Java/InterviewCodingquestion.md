## 1.How reverse a string in java using inbuild method
```
public class Main
{
	public static void main(String[] args) {
	    StringBuilder s =new StringBuilder("Sonal");
	    StringBuilder r=s.reverse();
		System.out.println(r);
	}
}
```
## 2.How to reverse a string without inbuild method 
```
public class Main
{
	public static void main(String[] args) {
		String s = new String("Sonal");
		char[] arr=s.toCharArray();
		System.out.println(arr);
		int j=arr.length;
		for(int i=0; i<(j/2); i++) {
			char temp= arr[i];
			arr[i]=arr[j-1];
			arr[j-1]=temp;
			j--;
		}
		System.out.println(arr);
	}
}
```
## 3. Swap two number without using third variable
```
public class Main
{
	public static void main(String[] args) {
     int x=10;
     int y=20;
     System.out.println(x);
     System.out.println(y);
     x=x+y;
     y=x-y;
     x=x-y;
     System.out.println(x);
     System.out.println(y);
	}
}
```
