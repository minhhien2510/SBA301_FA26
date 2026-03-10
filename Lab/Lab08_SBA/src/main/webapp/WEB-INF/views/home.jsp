<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" %>

<!DOCTYPE html>
<html>

<head>

    <title>Student Management</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">

</head>

<body class="bg-light">

<div class="container mt-4">

    <div class="d-flex justify-content-between mb-3">

        <h2>Student Management</h2>

        <a href="/logout" class="btn btn-danger">
            Logout
        </a>

    </div>


    <!-- Add student -->
    <div class="card mb-4 shadow">

        <div class="card-header bg-success text-white">
            Add New Student
        </div>

        <div class="card-body">

            <form action="/students" method="post">

                <div class="row">

                    <div class="col-md-3">
                        <input type="text" name="email" class="form-control" placeholder="Email" required/>
                    </div>

                    <div class="col-md-2">
                        <input type="text" name="firstname" class="form-control" placeholder="First name" required/>
                    </div>

                    <div class="col-md-2">
                        <input type="text" name="lastname" class="form-control" placeholder="Last name" required/>
                    </div>

                    <div class="col-md-2">
                        <input type="number" step="0.1" name="marks" class="form-control" placeholder="Marks" required/>
                    </div>

                    <div class="col-md-2">
                        <button type="submit" class="btn btn-success w-100">
                            Add
                        </button>
                    </div>

                </div>

            </form>

        </div>

    </div>


    <!-- Student table -->

    <div class="card shadow">

        <div class="card-header bg-primary text-white">
            Student List
        </div>

        <div class="card-body">

            <table class="table table-striped table-bordered">

                <thead class="table-dark">

                <tr>
                    <th>Email</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Marks</th>
                </tr>

                </thead>

                <tbody>

                <c:forEach items="${students}" var="s">

                    <tr>

                        <td>${s.email}</td>
                        <td>${s.firstname}</td>
                        <td>${s.lastname}</td>
                        <td>${s.marks}</td>

                    </tr>

                </c:forEach>

                </tbody>

            </table>

        </div>

    </div>

</div>

</body>

</html>