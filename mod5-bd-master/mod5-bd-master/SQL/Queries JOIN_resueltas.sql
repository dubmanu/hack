-- 1. Selecciona todos los datos de los empleados y los departamentos relacionados
select * from emp e  inner join dept d on e.deptno = d.deptno;

-- 2. Obten el nombre del empleado y el nombre del departamento en el que trabaja
select e.ename, d.dname
from emp e 
inner
 join dept d on e.deptno = d.deptno;

-- 3. Obten el nombre de los empleados y el salario y el nombre del departamento de aquellos empleados cuyo salario es mayor a 2000
select e.ename, e.sal, d.dname
from emp e 
inner join dept d on e.deptno = d.deptno
where e.sal > 2000;

-- 3. Obten el nombre de los empleados y el salario y el nombre del departamento de aquellos empleados cuyo salario es mayor a 2000 y que trabajan en el departamento que está en DALLAS
select e.ename, e.sal, d.dname
from emp e 
inner join dept d on e.deptno = d.deptno
where e.sal > 2000 and d.loc like 'DALLAS';

-- 4. Obten los empleados que cobran más que sus jefes
select e.ename, e.sal, j.ename, j.sal
from emp e 
inner join emp j on e.mgr = j.empno
where e.sal > j.sal;
 
 -- 5. Obten los empleados que cobran más que sus jefes (incluyendo comisiones). Son los mismos
select e.ename, e.sal, e.sal+coalesce(e.comm,0), j.ename, j.sal
from emp e 
inner join emp j on e.mgr = j.empno
where (e.sal + coalesce(e.comm, 0)) > j.sal;

-- 6. Obtén el número de empleados que hay en la empresa sin tener en cuenta los que están en DALLAS
select count(*)
from emp e
inner join dept d on e.deptno = d.deptno
where d.loc not like 'DALLAS';

-- 7. Obtén el número de empleados de cada departamento, así como el nombre del departamento.
select count(e.deptno), d.loc
from emp e
right join dept d on e.deptno = d.deptno
group by e.deptno, d.loc;