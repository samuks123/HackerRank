select SUM(c.population) from city c
join country p on c.countrycode = p.code
where p.continent = 'Asia'