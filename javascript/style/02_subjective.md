# Style Isn't Subjective

	!javascript
	// Silent error
	return
	{
		ok: false
	};

	// Works well
	return {
		ok: true
	};
	
---

# Style Isn't Subjective

	!javascript
	return
	{
		ok: false
	};
	
---

# Style Isn't Subjective

.fx: no-transition

	!javascript
	return; // semicolon insertion
	{
		ok: false
	};

---

# Style Isn't Subjective

.fx: no-transition

	!javascript
	return;
	{ // block
		ok: false
	};
	
---

# Style Isn't Subjective

.fx: no-transition

	!javascript
	return;
	{
		ok: false // label
	};

---

# Style Isn't Subjective

.fx: no-transition

	!javascript
	return;
	{             // useless
		ok: false // expression
	};            // statement
	
---

# Style Isn't Subjective

.fx: no-transition

	!javascript
	return;
	{
		ok: false; // semicolon insertion
	};

---

# Style Isn't Subjective

.fx: no-transition

	!javascript
	return;
	{
		ok: false;
	}; // empty statement

---

# Style Isn't Subjective

.fx: no-transition

	!javascript
	return;
	{ // unreachable statement
		ok: false;
	}
