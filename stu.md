## 表记录的增删改
- 增加语句
```js
INSERT INTO `student`(stuno,`name`,birthday,sex,phone,classid)
VALUES('500','张卓','19980221',TRUE,'17432132142',2);

INSERT INTO `student`(stuno,`name`,birthday,sex,phone,classid)
VALUES('500','张卓','19980221',TRUE,'17432132142',2);

INSERT INTO `student`(stuno,`name`,birthday,sex,phone,classid)
VALUES('500','张卓','19980221',TRUE,'17432132142',2),
VALUES('500','张卓2','19980221',TRUE,'17432132142',2);

```
- 修改

```js
UPDATE student SET `name`='李四';
WHERE id=12;

```

- 删除

```js
DELETE FROM student;
WHERE `name`='李四'

-- 删除列

```