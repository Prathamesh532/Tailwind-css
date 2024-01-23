const Login = () => {
    return (
        <div>
            <section className="bg-gray-50 min-h-screen flex items-center justify-center dark:bg-gray-900 dark:text-white">
                {/* login container */}
                <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center dark:bg-gray-800">
                    {/* form */}
                    <div className="md:w-1/2 px-8 md:px-16">
                        <h2 className="font-bold text-2xl text-[#002D74] dark:text-white">Login</h2>
                        <p className="text-xs mt-4 text-[#002D74] dark:text-white">If you are already a member, easily log in</p>
                        <form action className="flex flex-col gap-4">
                            <input className="p-2 mt-8 rounded-xl border dark:bg-gray-800 dark:text-white" type="email" name="email" placeholder="Email" />
                            <div className="relative">
                                <input className="p-2 rounded-xl border w-full dark:bg-gray-800 dark:text-white" type="password" name="password" placeholder="Password" />
                            </div>
                            <button className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300 dark:bg-gray-800 dark:text-white">Login</button>
                        </form>
                        <div className="mt-6 grid grid-cols-3 items-center text-gray-400 dark:text-gray-600">
                            <hr className="border-gray-400" />
                            <p className="text-center text-sm">OR</p>
                            <hr className="border-gray-400" />
                        </div>
                        <button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74] dark:bg-gray-800 dark:text-white">
                            Login with Google
                        </button>
                        <div className="mt-5 text-xs border-b border-[#002D74] py-4 text-[#002D74] dark:border-gray-600 dark:text-gray-600">
                            <a href="#">Forgot your password?</a>
                        </div>
                        <div className="mt-3 text-xs flex justify-between items-center text-[#002D74] dark:text-white">
                            <p>Dont have an account?</p>
                            <button className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300 dark:bg-gray-800 dark:text-white">
                                Register
                            </button>
                        </div>
                    </div>
                    {/* image */}
                    <div className="md:block hidden w-1/2">
                        <img className="rounded-2xl" src="https://images.unsplash.com/photo-1616606103915-dea7be788566?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Login;
