-- Consultas a realizar sobre las tablas emp ydept

-- 01. Obtener todos los datos de todos los empleados.
select * from emp;
-- 02. Obtener todos los datos de todos los departamentos.
select * from dept;
-- 03. Obtener todos los datos de los administrativos (su trabajo es, en ingl´es, ’CLERK’).
select * from emp where job like 'CLERK';
-- 04. Idem, pero ordenado por el nombre.
select * from emp where job like 'CLERK' order by ename;
-- 05. Obten el mismo resultado de la pregunta anterior, pero modificando la sentencia SQL.
select e.empno, e.ename, e.job, e.mgr, e.hiredate, e.sal, e.comm, e.deptno from emp e where job like 'CLERK' order by 2;
-- 06. Obten el numero (codigo), nombre y salario de los empleados.
select e.empno, e.ename, e.sal from emp e;
-- 07. Lista los nombres de todos los departamentos.
select d.dname from dept d;
-- 08. Idem, pero ordenandolos por nombre.
select d.dname from dept d order by d.dname;
-- 09. Idem, pero ordenandolo por la ciudad (no se debe mostrar la ciudad en el resultado).
select d.dname from dept d order by d.loc;
-- 10. Idem, pero el resultado debe mostrarse ordenado por la ciudad en orden inverso.
select d.dname from dept d order by d.loc desc;
-- 11. Obtener el nombre y empleo de todos los empleados, ordenado por salario.
select e.ename, e.job from emp e order by e.sal;
-- 12. Obtener el nombre y empleo de todos los empleados, ordenado primero por su trabajo y luego por su salario.
select e.ename, e.job from emp e order by e.job, e.sal;
-- 13. Idem, pero ordenando inversamente por empleo y normalmente por salario.
select e.ename, e.job from emp e order by e.job desc, e.sal;
-- 14. Obten los salarios, las comisiones y el nombre de cada uno de los empleados del departamento 30.
select e.ename, e.sal from emp e where deptno = 30;
-- 15. Idem, pero ordenado por comision.
select e.ename, e.sal from emp e where deptno = 30 order by e.comm;
-- 16. Obten las comisiones de todos los empleados. 
select e.comm from emp e;
-- 17. Obten las comisiones de los empleados de forma que no se repitan.
select distinct e.comm from emp e;
-- 18. Obten el nombre de empleado y su comision.
select e.ename, e.comm from emp e;
-- 19. Obten los nombres de los empleados y sus salarios, de forma que no se repitan filas.
select distinct e.ename, e.sal from emp e;
-- 20. Obten las comisiones de los empleados y sus numeros de departamento, de forma que no se repitan filas.
select distinct e.comm, e.deptno from emp e;
-- 21 Obten los nuevos salarios de los empleados del departamento 30, que resultarian de sumar a su salario una gratificación de 1000.
--     Muestra también los nombres de los empleados
select e.ename, e.sal + 1000 from emp e where e.deptno = 30;
-- 22 Lo mismo que la anterior, pero mostrando también su salario original, y haz que la columna que almaccena el nueva salario se denonime new_sal
select e.ename, e.sal, e.sal + 1000 as 'new_sal' from emp e where e.deptno = 30;
-- 23 Halla los empleados que tienen una comision superior a la mitad de su salario.
select e.ename from emp e where e.comm > e.sal / 2;
-- 24 Halla los empleados que no tienen comision, o que la tengan menor o igual que el 25% de su salario.
select e.ename from emp e where e.comm is null or e.comm <= e.sal/4;
select e.ename from emp e where e.comm is null or e.comm <= e.sal * 0.25;
-- 25 Obten una lista de los nombres de los empleados y sus saldarios de forma que en la salida aparezca en todas las filas 'Name:' and 'Salary:' antes
--     del respectivo campo. Las columnas de la tabla deben llamarse 'Name' y 'Salary
select concat('Name: ', e.ename) as 'Name', concat('Salary: ', e.sal) as 'Salary' from emp e;
-- 26. Hallar el codigo, salario y comision de los empleados cuyo codigo sea mayor que 7500.
select e.empno, e.sal, e.comm from emp e where e.empno > 7500;
-- 27. Obten todos los datos de los empleados que esten ordenados alfabeticamente y la primera letra sea J o mayor.
--     https://dev.mysql.com/doc/refman/5.7/en/string-functions.html#function_substring
select * from emp e where substr(e.ename,1,1) >= 'J' order by e.ename asc;
select * from emp e where e.ename between 'J%' AND 'Z%' order by e.ename asc;

-- 28. Obten el salario, comision y salario total (salario+comision) de los empleados con comision,
--     ordenando el resultado por numero de empleado.
--     OJO: Solo con comprobar con IS NOT NULL no es suficiente porque hay un empleado cuya comisión  es 0.
--     Suponemos que NULL nos indica que no tiene comision
select e.sal, e.comm, e.sal+e.comm from emp e where e.comm <> 0 order by e.empno;
select e.sal, e.comm, e.sal+e.comm from emp e where e.comm <> 0 order by e.empno;
select e.sal, e.comm, e.sal+e.comm from emp e where e.comm is not null and e.comm <> 0 order by e.empno;
-- 29. Lista la misma informacion, pero para los empleados que no tienen comision.
select e.sal, e.comm, e.sal+e.comm from emp e where e.comm is null or e.comm = 0 order by e.empno;
-- 30. Muestra el nombre de los empleados que, teniendo un salario superior a 1000, tengan como jefe
--     al empleado cuyo codigo es 7698.
select e.ename from emp e where e.sal > 1000 and e.mgr = 7698;
-- 31. Halla el conjunto complementario del resultado del ejercicio anterior.
-- DIFICIL
select e.ename from emp e where not (e.sal > 1000 and coalesce(e.mgr,0) = 7698);

select *, e.ename from emp e where (e.sal <= 1000 and e.mgr = 7698) || (e.mgr <> 7698 or e.mgr is null) order by 1;
select *, e.ename from emp e where (e.sal <= 1000 || e.mgr <> 7698 || e.mgr is null) order by 1;
-- 32. Indica para cada empleado el porcentaje que supone su comision sobre su salario, ordenando el
--     resultado por el nombre del mismo empleado.
select e.ename, e.sal, e.comm, e.comm/e.sal*100 as 'porcentaje' from emp e order by e.ename;
-- 33. Hallar los empleados del departamento 10 cuyo nombre no contiene la cadena LA.
select * from emp e where e.deptno = 10 and e.ename like '%LA%';
-- 34. Obten los empleados que no son supervisados por ning´un otro.
select * from emp e where e.mgr is null;
-- 35. Obten los nombres de los departamentos que no sean Ventas (SALES) ni investigacion (RESEARCH).
--     Ordena el resultado por la localidad del departamento.
select d.dname from dept d where d.dname not like 'SALES' and d.dname not like 'RESEARCH' order by d.loc;
-- 36. Deseamos conocer el nombre de los empleados y el codigo del departamento de los administra-
--     tivos(CLERK) que no trabajan en el departamento 10, y cuyo salario es superior a 800, ordenado
--     por fecha de contratacion.
select e.ename, e.deptno from emp e where e.job LIKE 'CLERK' and e.deptno <> 10 and e.sal > 800 order by hiredate; 
-- 37. Para los empleados que tengan comision, obten sus nombres y el cociente entre su salario y su
--     comision (excepto cuando la comision sea cero), ordenando el resultado por nombre.
select e.ename, e.sal/e.comm from emp e where e.comm is not null and e.comm <> 0 order by e.ename;
-- 38. Lista toda la informacion sobre los empleados cuyo nombre completo tenga exactamente 5 caracteres.
select * from emp e where e.ename like '_____';
select * from emp e where length(e.ename) = 5;
-- 39. Lo mismo, pero para los empleados cuyo nombre tenga al menos cinco letras.
select * from emp e where e.ename like '_____%';
select * from emp e where length(e.ename) >= 5;
-- 40. Halla los datos de los empleados que, o bien su nombre empieza por A y su salario es superior
--     a 1000, o bien reciben comisi´on y trabajan en el departamento 30.
select * from emp e where (e.ename like 'A%' and e.sal > 1000) or (e.comm > 0 and e.deptno = 30); 
-- 41. Halla el nombre, el salario y el sueldo total (sal+com)de todos los empleados, ordenando el resultado
--     primero por salario y luego por el sueldo total. En el caso de que no tenga comisi´on, el sueldo
--     total debe reflejar solo el salario.
-- NO select *, e.ename, e.sal, e.sal+e.comm from emp e order by e.sal, e.sal+e.comm;
select *, e.ename, e.sal, e.sal+coalesce(e.comm,0) from emp e order by e.sal, e.sal+e.comm;

-- 42. Obtén el nombre, salario y la comisión de los empleados que perciben un salario que esta entre la mitad de la comisión y la propia comisión.
select e.ename, e.sal, e.comm from emp e where sal between e.comm/2 AND e.comm;
-- 43. Obtén el complementario del anterior.
-- DIFICIL
select e.ename, e.sal, e.comm from emp e where sal not between coalesce(e.comm,0)/2 AND coalesce(e.comm,0);
-- 44. Lista los nombres y empleos de aquellos empleados cuyo empleo acaba en MAN y cuyo nombre empieza por A.
select e.ename, e.job from emp e where e.job like '%MAN' AND e.ename like 'A%';

-- 45. Lista los nombres y fecha de contrataci´on de aquellos empleados que no son vendedores (SALESMAN).
select e.ename, e.hiredate from emp e where e.job not like 'SALESMAN';
-- 46. Obten la informacion disponible de los empleados cuyo numero es uno de los siguientes: 7844,
-- 7900, 7521, 7521, 7782, 7934, 7678 y 7369, pero que no sea uno de los siguientes: 7902, 7839, 7499 ni 7878. 
-- Intenta hacerlo usando como máximo un AND en la clausura WHERE.
select * from emp e where e.empno in (7844, 7900, 7521, 7521, 7782, 7934, 7678, 7369) and e.empno not in (7902, 7839, 7499, 7878);

