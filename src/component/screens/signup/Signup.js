import React from 'react'

function Signup() {
    return (
        <div>
            <div class="row">
                <div class="col s12 m6">
                    <div class="card blue-grey darken-1">
                        <div class="card-content white-text">
                            <div class="input-field">
                                <input id="last_name" type="text" class="validate" />
                                <label for="last_name">Name</label>
                            </div>
                            <div class="input-field">
                                <input id="last_name" type="text" class="validate" />
                                <label for="last_name">Email</label>
                            </div>
                            <div class="input-field">
                                <input id="last_name" type="text" class="validate" />
                                <label for="last_name">Password</label>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup