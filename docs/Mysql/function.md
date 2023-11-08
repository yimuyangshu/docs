## 字符串函数
::: code-group
```sql [连接字符串]
SELECT CONCAT('Hello', ' ', 'World'); -- Output: Hello World
```
```sql [截取字符串]
SELECT SUBSTRING('MySQL is powerful', 1, 5); -- Output: MySQL
```
```sql [转换大小写]
SELECT UPPER('hello'); -- Output: HELLO
SELECT LOWER('WORLD'); -- Output: world
```
```sql [返回长度]
SELECT LENGTH('Hello'); -- Output: 5
```
```sql [去除首尾空格]
SELECT TRIM('   Spaces   '); -- Output: Spaces
```
```sql [替换字符串]
SELECT REPLACE('Hello, world', 'world', 'MySQL'); -- Output: Hello, MySQL
```
:::



## 数值函数
::: code-group
```sql [四舍五入]
SELECT ROUND(3.14159, 2); -- Output: 3.14
```
```sql [绝对值]
SELECT ABS(-10); -- Output: 10
```
```sql [向上/下取整]
SELECT CEIL(4.3); -- Output: 5
SELECT FLOOR(4.9); -- Output: 4
```
```sql [返回随机数]
SELECT RAND(); -- Output: 0-1之间随机浮点数
```
:::


## 日期和时间函数
::: code-group
```sql [当前日期和时间]
SELECT NOW(); -- Output: 2023-11-08 11:14:15
```
```sql [提取日期/时间]
SELECT DATE(NOW()); -- Output: 2023-11-08
SELECT TIME(NOW()); -- Output: 11:14:15
```
```sql [日期相差天数]
SELECT DATEDIFF('2023-11-08', '2023-11-01'); -- Output: 7
```
```sql [时间格式化]
SELECT DATE_FORMAT(NOW(), '%Y-%m-%d'); -- Output: 'YYYY-MM-DD'
```
:::


## 逻辑函数
::: code-group
```sql [IF]
SELECT IF(10 > 5, 'True', 'False'); -- Output: True
```
```sql [CASE WHEN]
SELECT 
    CASE 
        WHEN column_name > 10 THEN '大于 10'
        WHEN column_name < 10 THEN '小于 10'
        ELSE '等于 10'
    END AS Result
FROM table_name;
```
```sql [IFNULL]
-- 如果为null则返回替代值
SELECT IFNULL(NULL, '替代值'); -- Output: 替代值
```
```sql [GROUP_CONCAT]
-- 将多行合并为单行并用指定的分隔符分隔
SELECT GROUP_CONCAT(column_name SEPARATOR ', ') FROM table_name; -- Output: name1,name2,name3
```
:::