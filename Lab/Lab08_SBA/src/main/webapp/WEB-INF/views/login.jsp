<%@ page contentType="text/html;charset=UTF-8" %>

<!DOCTYPE html>
<html>
<head>
    <title>Login</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">

</head>

<body class="bg-light">

<div class="container">

    <div class="row justify-content-center mt-5">

        <div class="col-md-4">

            <div class="card shadow">

                <div class="card-header text-center bg-primary text-white">
                    <h4>Student Login</h4>
                </div>

                <div class="card-body">

                    <form action="login" method="post">

                        <div class="mb-3">
                            <label>Email</label>
                            <input type="text" name="email" class="form-control"/>
                        </div>

                        <div class="mb-3">
                            <label>Password</label>
                            <input type="password" name="password" class="form-control"/>
                        </div>

                        <div class="d-grid">
                            <button type="submit" class="btn btn-primary">
                                Login
                            </button>
                        </div>

                    </form>

                </div>

            </div>

        </div>

    </div>

</div>

</body>
</html>