#include <stdio.h>
#include <string.h>

int main(void)
{
    char string[50];

    printf("Enter your string: ");
    scanf("%s", string);

    for (int i = 0; i < strlen(string); i++)
    {
        string[i]++;
    }
    
    printf("%s\n", string);

    return 0;
}
