## How reverse a string in java using inbuild method
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
## How to reverse a string without inbuild method 
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
